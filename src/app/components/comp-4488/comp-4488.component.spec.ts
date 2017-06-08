/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4488Component } from './comp-4488.component';

describe('Comp4488Component', () => {
  let component: Comp4488Component;
  let fixture: ComponentFixture<Comp4488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
