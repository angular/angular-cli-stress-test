/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4462Component } from './comp-4462.component';

describe('Comp4462Component', () => {
  let component: Comp4462Component;
  let fixture: ComponentFixture<Comp4462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
