/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1942Component } from './comp-1942.component';

describe('Comp1942Component', () => {
  let component: Comp1942Component;
  let fixture: ComponentFixture<Comp1942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
