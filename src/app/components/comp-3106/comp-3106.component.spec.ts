/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3106Component } from './comp-3106.component';

describe('Comp3106Component', () => {
  let component: Comp3106Component;
  let fixture: ComponentFixture<Comp3106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
