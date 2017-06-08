/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp371Component } from './comp-371.component';

describe('Comp371Component', () => {
  let component: Comp371Component;
  let fixture: ComponentFixture<Comp371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
