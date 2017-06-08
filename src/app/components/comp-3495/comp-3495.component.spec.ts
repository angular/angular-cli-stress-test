/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3495Component } from './comp-3495.component';

describe('Comp3495Component', () => {
  let component: Comp3495Component;
  let fixture: ComponentFixture<Comp3495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
