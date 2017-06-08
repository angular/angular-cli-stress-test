/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1890Component } from './comp-1890.component';

describe('Comp1890Component', () => {
  let component: Comp1890Component;
  let fixture: ComponentFixture<Comp1890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
