/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service581Service } from './service-581.service';

describe('Service581Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service581Service]
    });
  });

  it('should ...', inject([Service581Service], (service: Service581Service) => {
    expect(service).toBeTruthy();
  }));
});
