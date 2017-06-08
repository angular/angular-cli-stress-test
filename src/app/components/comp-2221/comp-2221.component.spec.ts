/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2221Component } from './comp-2221.component';

describe('Comp2221Component', () => {
  let component: Comp2221Component;
  let fixture: ComponentFixture<Comp2221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
