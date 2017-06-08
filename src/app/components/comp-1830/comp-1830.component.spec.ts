/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1830Component } from './comp-1830.component';

describe('Comp1830Component', () => {
  let component: Comp1830Component;
  let fixture: ComponentFixture<Comp1830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
