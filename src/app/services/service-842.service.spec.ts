/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service842Service } from './service-842.service';

describe('Service842Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service842Service]
    });
  });

  it('should ...', inject([Service842Service], (service: Service842Service) => {
    expect(service).toBeTruthy();
  }));
});
