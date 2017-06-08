/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1780Component } from './comp-1780.component';

describe('Comp1780Component', () => {
  let component: Comp1780Component;
  let fixture: ComponentFixture<Comp1780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
