/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3770Component } from './comp-3770.component';

describe('Comp3770Component', () => {
  let component: Comp3770Component;
  let fixture: ComponentFixture<Comp3770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
