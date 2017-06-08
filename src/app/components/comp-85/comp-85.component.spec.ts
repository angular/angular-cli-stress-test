/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp85Component } from './comp-85.component';

describe('Comp85Component', () => {
  let component: Comp85Component;
  let fixture: ComponentFixture<Comp85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
