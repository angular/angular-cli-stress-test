/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp61Component } from './comp-61.component';

describe('Comp61Component', () => {
  let component: Comp61Component;
  let fixture: ComponentFixture<Comp61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
