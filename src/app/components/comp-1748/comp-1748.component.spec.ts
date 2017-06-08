/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1748Component } from './comp-1748.component';

describe('Comp1748Component', () => {
  let component: Comp1748Component;
  let fixture: ComponentFixture<Comp1748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
