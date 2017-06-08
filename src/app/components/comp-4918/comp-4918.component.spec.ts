/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4918Component } from './comp-4918.component';

describe('Comp4918Component', () => {
  let component: Comp4918Component;
  let fixture: ComponentFixture<Comp4918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
