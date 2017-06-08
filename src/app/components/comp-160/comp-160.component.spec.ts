/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp160Component } from './comp-160.component';

describe('Comp160Component', () => {
  let component: Comp160Component;
  let fixture: ComponentFixture<Comp160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
