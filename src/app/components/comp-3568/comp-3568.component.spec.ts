/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3568Component } from './comp-3568.component';

describe('Comp3568Component', () => {
  let component: Comp3568Component;
  let fixture: ComponentFixture<Comp3568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
