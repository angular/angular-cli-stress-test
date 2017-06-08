/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4593Component } from './comp-4593.component';

describe('Comp4593Component', () => {
  let component: Comp4593Component;
  let fixture: ComponentFixture<Comp4593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
