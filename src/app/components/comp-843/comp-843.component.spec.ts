/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp843Component } from './comp-843.component';

describe('Comp843Component', () => {
  let component: Comp843Component;
  let fixture: ComponentFixture<Comp843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
