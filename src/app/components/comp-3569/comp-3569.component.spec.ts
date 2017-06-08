/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3569Component } from './comp-3569.component';

describe('Comp3569Component', () => {
  let component: Comp3569Component;
  let fixture: ComponentFixture<Comp3569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
