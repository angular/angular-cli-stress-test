/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service426Service } from './service-426.service';

describe('Service426Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service426Service]
    });
  });

  it('should ...', inject([Service426Service], (service: Service426Service) => {
    expect(service).toBeTruthy();
  }));
});
