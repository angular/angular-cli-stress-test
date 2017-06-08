/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1256Component } from './comp-1256.component';

describe('Comp1256Component', () => {
  let component: Comp1256Component;
  let fixture: ComponentFixture<Comp1256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
