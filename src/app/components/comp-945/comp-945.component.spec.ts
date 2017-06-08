/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp945Component } from './comp-945.component';

describe('Comp945Component', () => {
  let component: Comp945Component;
  let fixture: ComponentFixture<Comp945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
