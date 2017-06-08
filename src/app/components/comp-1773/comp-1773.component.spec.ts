/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1773Component } from './comp-1773.component';

describe('Comp1773Component', () => {
  let component: Comp1773Component;
  let fixture: ComponentFixture<Comp1773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
