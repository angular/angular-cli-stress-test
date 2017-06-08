/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3724Component } from './comp-3724.component';

describe('Comp3724Component', () => {
  let component: Comp3724Component;
  let fixture: ComponentFixture<Comp3724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
