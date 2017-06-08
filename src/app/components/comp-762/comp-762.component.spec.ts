/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp762Component } from './comp-762.component';

describe('Comp762Component', () => {
  let component: Comp762Component;
  let fixture: ComponentFixture<Comp762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
