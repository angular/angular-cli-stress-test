/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4408Component } from './comp-4408.component';

describe('Comp4408Component', () => {
  let component: Comp4408Component;
  let fixture: ComponentFixture<Comp4408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
