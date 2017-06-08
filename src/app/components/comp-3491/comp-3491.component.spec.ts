/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3491Component } from './comp-3491.component';

describe('Comp3491Component', () => {
  let component: Comp3491Component;
  let fixture: ComponentFixture<Comp3491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
