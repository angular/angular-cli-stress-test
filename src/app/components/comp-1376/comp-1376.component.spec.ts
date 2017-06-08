/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1376Component } from './comp-1376.component';

describe('Comp1376Component', () => {
  let component: Comp1376Component;
  let fixture: ComponentFixture<Comp1376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
