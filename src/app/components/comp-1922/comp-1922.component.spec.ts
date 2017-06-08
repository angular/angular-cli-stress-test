/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1922Component } from './comp-1922.component';

describe('Comp1922Component', () => {
  let component: Comp1922Component;
  let fixture: ComponentFixture<Comp1922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
