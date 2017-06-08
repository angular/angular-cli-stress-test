/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp951Component } from './comp-951.component';

describe('Comp951Component', () => {
  let component: Comp951Component;
  let fixture: ComponentFixture<Comp951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
