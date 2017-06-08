/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1353Component } from './comp-1353.component';

describe('Comp1353Component', () => {
  let component: Comp1353Component;
  let fixture: ComponentFixture<Comp1353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
