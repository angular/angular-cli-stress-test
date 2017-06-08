/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4569Component } from './comp-4569.component';

describe('Comp4569Component', () => {
  let component: Comp4569Component;
  let fixture: ComponentFixture<Comp4569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
