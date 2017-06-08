/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4300Component } from './comp-4300.component';

describe('Comp4300Component', () => {
  let component: Comp4300Component;
  let fixture: ComponentFixture<Comp4300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
