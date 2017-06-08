/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1075Component } from './comp-1075.component';

describe('Comp1075Component', () => {
  let component: Comp1075Component;
  let fixture: ComponentFixture<Comp1075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
