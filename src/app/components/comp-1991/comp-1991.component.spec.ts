/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1991Component } from './comp-1991.component';

describe('Comp1991Component', () => {
  let component: Comp1991Component;
  let fixture: ComponentFixture<Comp1991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
