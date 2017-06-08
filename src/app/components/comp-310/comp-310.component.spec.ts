/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp310Component } from './comp-310.component';

describe('Comp310Component', () => {
  let component: Comp310Component;
  let fixture: ComponentFixture<Comp310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
