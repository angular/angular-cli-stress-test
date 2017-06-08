/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1586Component } from './comp-1586.component';

describe('Comp1586Component', () => {
  let component: Comp1586Component;
  let fixture: ComponentFixture<Comp1586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
