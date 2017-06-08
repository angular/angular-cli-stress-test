/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp902Component } from './comp-902.component';

describe('Comp902Component', () => {
  let component: Comp902Component;
  let fixture: ComponentFixture<Comp902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
