/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp925Component } from './comp-925.component';

describe('Comp925Component', () => {
  let component: Comp925Component;
  let fixture: ComponentFixture<Comp925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
