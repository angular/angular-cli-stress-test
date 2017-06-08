/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1725Component } from './comp-1725.component';

describe('Comp1725Component', () => {
  let component: Comp1725Component;
  let fixture: ComponentFixture<Comp1725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
