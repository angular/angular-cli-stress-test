/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1862Component } from './comp-1862.component';

describe('Comp1862Component', () => {
  let component: Comp1862Component;
  let fixture: ComponentFixture<Comp1862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
