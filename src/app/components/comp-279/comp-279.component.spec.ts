/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp279Component } from './comp-279.component';

describe('Comp279Component', () => {
  let component: Comp279Component;
  let fixture: ComponentFixture<Comp279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
