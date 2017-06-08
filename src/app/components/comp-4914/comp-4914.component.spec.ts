/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4914Component } from './comp-4914.component';

describe('Comp4914Component', () => {
  let component: Comp4914Component;
  let fixture: ComponentFixture<Comp4914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
