/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp705Component } from './comp-705.component';

describe('Comp705Component', () => {
  let component: Comp705Component;
  let fixture: ComponentFixture<Comp705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
