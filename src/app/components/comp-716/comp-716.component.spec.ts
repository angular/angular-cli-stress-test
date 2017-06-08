/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp716Component } from './comp-716.component';

describe('Comp716Component', () => {
  let component: Comp716Component;
  let fixture: ComponentFixture<Comp716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
