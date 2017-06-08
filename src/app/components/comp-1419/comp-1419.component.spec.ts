/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1419Component } from './comp-1419.component';

describe('Comp1419Component', () => {
  let component: Comp1419Component;
  let fixture: ComponentFixture<Comp1419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
