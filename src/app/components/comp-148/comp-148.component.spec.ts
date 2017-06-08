/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp148Component } from './comp-148.component';

describe('Comp148Component', () => {
  let component: Comp148Component;
  let fixture: ComponentFixture<Comp148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
