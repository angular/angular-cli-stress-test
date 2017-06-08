/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1861Component } from './comp-1861.component';

describe('Comp1861Component', () => {
  let component: Comp1861Component;
  let fixture: ComponentFixture<Comp1861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
