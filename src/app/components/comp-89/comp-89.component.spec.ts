/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp89Component } from './comp-89.component';

describe('Comp89Component', () => {
  let component: Comp89Component;
  let fixture: ComponentFixture<Comp89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp89Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
