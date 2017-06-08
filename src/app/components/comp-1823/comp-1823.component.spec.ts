/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1823Component } from './comp-1823.component';

describe('Comp1823Component', () => {
  let component: Comp1823Component;
  let fixture: ComponentFixture<Comp1823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
